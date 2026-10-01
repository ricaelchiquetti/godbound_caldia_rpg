import { useEffect, useState } from 'react';
import {
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  orderBy,
  query,
} from 'firebase/firestore';
import { db, isFirebaseConfigured } from '../lib/firebase';

const COLLECTION = 'factionSheets';

export const ACTION_DIE_BY_POWER = { 1: '1d6', 2: '1d8', 3: '1d10', 4: '1d12', 5: '1d20' };

export const emptyFactionSheet = () => ({
  name: '',
  power: 1,
  cohesion: 1,
  trouble: 0,
  dominion: 0,
  features: [],
  problems: [],
  notes: '',
});

export function useFactionSheets() {
  const [sheets, setSheets] = useState([]);
  const [loading, setLoading] = useState(isFirebaseConfigured);

  useEffect(() => {
    if (!isFirebaseConfigured) return;
    const q = query(collection(db, COLLECTION), orderBy('name'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setSheets(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const createSheet = (data) =>
    addDoc(collection(db, COLLECTION), { ...emptyFactionSheet(), ...data, updatedAt: serverTimestamp() });

  const updateSheet = (id, data) =>
    updateDoc(doc(db, COLLECTION, id), { ...data, updatedAt: serverTimestamp() });

  const deleteSheet = (id) => deleteDoc(doc(db, COLLECTION, id));

  return { sheets, loading, createSheet, updateSheet, deleteSheet };
}
