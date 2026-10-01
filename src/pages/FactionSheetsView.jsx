import { useState } from 'react';
import PageLayout from '../components/PageLayout';
import { isFirebaseConfigured } from '../lib/firebase';
import { useFactionSheets, ACTION_DIE_BY_POWER, emptyFactionSheet } from '../hooks/useFactionSheets';

function NotConfigured() {
  return (
    <PageLayout title="Fichas de Facção">
      <div className="bg-white/70 border border-dd-gold/60 rounded-sm p-6 font-serif text-stone-800">
        <p className="mb-2">
          As fichas de facção são compartilhadas em tempo real entre Mestre e jogadores via Firebase,
          e essa configuração ainda não foi feita neste ambiente.
        </p>
        <p>
          Crie um arquivo <code>.env</code> na raiz do projeto (baseado em <code>.env.example</code>) com as
          chaves do seu projeto Firebase e rode o app novamente.
        </p>
      </div>
    </PageLayout>
  );
}

function FeatureProblemEditor({ label, items, onChange, withPoints }) {
  const update = (index, field, value) => {
    const next = items.slice();
    next[index] = withPoints ? { ...next[index], [field]: value } : value;
    onChange(next);
  };
  const add = () => onChange([...items, withPoints ? { text: '', points: 1 } : '']);
  const remove = (index) => onChange(items.filter((_, i) => i !== index));

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <h4 className="font-bold text-sm text-[#554215]">{label}</h4>
        <button type="button" onClick={add} className="text-xs px-2 py-1 border border-dd-gold/60 rounded hover:bg-dd-gold/10">
          + adicionar
        </button>
      </div>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex gap-2 items-start">
            <textarea
              className="flex-1 border border-stone-300 rounded p-1.5 text-sm"
              rows={2}
              value={withPoints ? item.text : item}
              onChange={(e) => update(index, 'text', e.target.value)}
              placeholder={withPoints ? 'Descrição do problema...' : 'Descrição da característica...'}
            />
            {withPoints && (
              <input
                type="number"
                min={1}
                className="w-16 border border-stone-300 rounded p-1.5 text-sm"
                value={item.points}
                onChange={(e) => update(index, 'points', Number(e.target.value) || 0)}
              />
            )}
            <button type="button" onClick={() => remove(index)} className="text-red-700 text-xs px-2 py-1.5">
              remover
            </button>
          </div>
        ))}
        {items.length === 0 && <p className="text-xs text-stone-500 italic">Nenhum item ainda.</p>}
      </div>
    </div>
  );
}

function FactionSheetForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(initial);
  const troubleTotal = (form.problems || []).reduce((sum, p) => sum + (Number(p.points) || 0), 0);
  const actionDie = ACTION_DIE_BY_POWER[form.power] || '1d6';

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave({ ...form, trouble: troubleTotal });
      }}
      className="bg-white/80 border border-dd-gold/60 rounded-sm p-4 md:p-6 space-y-4 font-serif text-stone-900"
    >
      <div>
        <label className="block text-sm font-bold mb-1">Nome da Facção</label>
        <input
          required
          className="w-full border border-stone-300 rounded p-2"
          value={form.name}
          onChange={set('name')}
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div>
          <label className="block text-sm font-bold mb-1">Poder (1-5)</label>
          <select
            className="w-full border border-stone-300 rounded p-2"
            value={form.power}
            onChange={(e) => setForm({ ...form, power: Number(e.target.value) })}
          >
            {[1, 2, 3, 4, 5].map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold mb-1">Dado de Ação</label>
          <input disabled className="w-full border border-stone-200 bg-stone-100 rounded p-2" value={actionDie} />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1">Coesão</label>
          <input
            type="number"
            min={0}
            className="w-full border border-stone-300 rounded p-2"
            value={form.cohesion}
            onChange={(e) => setForm({ ...form, cohesion: Number(e.target.value) || 0 })}
          />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1">Domínio</label>
          <input
            type="number"
            min={0}
            className="w-full border border-stone-300 rounded p-2"
            value={form.dominion}
            onChange={(e) => setForm({ ...form, dominion: Number(e.target.value) || 0 })}
          />
        </div>
      </div>

      <p className="text-sm text-stone-600">
        Trouble atual (soma dos Problemas): <strong>{troubleTotal}</strong>
      </p>

      <FeatureProblemEditor
        label="Características (Features)"
        items={form.features || []}
        onChange={(features) => setForm({ ...form, features })}
      />

      <FeatureProblemEditor
        label="Problemas (Problems)"
        items={form.problems || []}
        onChange={(problems) => setForm({ ...form, problems })}
        withPoints
      />

      <div>
        <label className="block text-sm font-bold mb-1">Notas</label>
        <textarea
          rows={3}
          className="w-full border border-stone-300 rounded p-2"
          value={form.notes}
          onChange={set('notes')}
        />
      </div>

      <div className="flex gap-2 justify-end">
        <button type="button" onClick={onCancel} className="px-4 py-2 rounded border border-stone-300">
          Cancelar
        </button>
        <button type="submit" className="px-4 py-2 rounded bg-dd-red text-parchment font-bold">
          Salvar
        </button>
      </div>
    </form>
  );
}

function FactionSheetCard({ sheet, onEdit, onDelete }) {
  return (
    <article className="bg-white/70 border border-dd-gold/60 rounded-sm p-4 font-serif text-stone-900 space-y-2">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-bold">{sheet.name}</h3>
        <div className="flex gap-2 shrink-0">
          <button onClick={() => onEdit(sheet)} className="text-xs px-2 py-1 border border-dd-gold/60 rounded hover:bg-dd-gold/10">
            Editar
          </button>
          <button onClick={() => onDelete(sheet)} className="text-xs px-2 py-1 border border-red-300 text-red-700 rounded hover:bg-red-50">
            Excluir
          </button>
        </div>
      </div>

      <p className="text-sm">
        <strong>Poder:</strong> {sheet.power} ({ACTION_DIE_BY_POWER[sheet.power] || '1d6'}) &nbsp;
        <strong>Coesão:</strong> {sheet.cohesion} &nbsp;
        <strong>Trouble:</strong> {sheet.trouble} &nbsp;
        <strong>Domínio:</strong> {sheet.dominion}
      </p>

      {sheet.features?.length > 0 && (
        <div>
          <h4 className="font-bold text-sm">Características</h4>
          <ul className="list-disc list-inside text-sm">
            {sheet.features.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
        </div>
      )}

      {sheet.problems?.length > 0 && (
        <div>
          <h4 className="font-bold text-sm">Problemas</h4>
          <ul className="list-disc list-inside text-sm">
            {sheet.problems.map((p, i) => <li key={i}>{p.text} ({p.points} pt{p.points === 1 ? '' : 's'})</li>)}
          </ul>
        </div>
      )}

      {sheet.notes && <p className="text-sm italic text-stone-600">{sheet.notes}</p>}
    </article>
  );
}

export default function FactionSheetsView() {
  const { sheets, loading, createSheet, updateSheet, deleteSheet } = useFactionSheets();
  const [editing, setEditing] = useState(null); // null | 'new' | sheet object

  if (!isFirebaseConfigured) return <NotConfigured />;

  const handleSave = async (data) => {
    if (editing === 'new') {
      await createSheet(data);
    } else {
      await updateSheet(editing.id, data);
    }
    setEditing(null);
  };

  const handleDelete = async (sheet) => {
    if (window.confirm(`Excluir a facção "${sheet.name}"? Essa ação não pode ser desfeita.`)) {
      await deleteSheet(sheet.id);
    }
  };

  return (
    <PageLayout title="Fichas de Facção">
      <p className="text-sm text-stone-600 mb-4">
        Fichas compartilhadas em tempo real — Mestre e jogadores veem as mesmas facções e cultos.
      </p>

      {editing ? (
        <FactionSheetForm
          initial={editing === 'new' ? emptyFactionSheet() : editing}
          onSave={handleSave}
          onCancel={() => setEditing(null)}
        />
      ) : (
        <>
          <button
            onClick={() => setEditing('new')}
            className="mb-4 px-4 py-2 rounded bg-dd-red text-parchment font-bold"
          >
            + Nova Facção
          </button>

          {loading && <p>Carregando...</p>}
          {!loading && sheets.length === 0 && <p className="italic text-stone-600">Nenhuma facção cadastrada ainda.</p>}

          <div className="grid md:grid-cols-2 gap-4">
            {sheets.map((sheet) => (
              <FactionSheetCard
                key={sheet.id}
                sheet={sheet}
                onEdit={setEditing}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </>
      )}
    </PageLayout>
  );
}
