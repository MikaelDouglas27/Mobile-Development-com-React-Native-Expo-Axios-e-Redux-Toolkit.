import { useEffect, useState } from 'react';
import axios from 'axios';
import { getErrorMessage } from '../services/api';
export function useRemoteData(loader) {
  const [state, setState] = useState({ data: null, loading: true, error: null });
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    let active = true;
    setState({ data: null, loading: true, error: null });
    loader(controller.signal).then(data => {
      if (active) setState({ data, loading: false, error: null });
    }).catch(error => {
      if (active && !axios.isCancel(error)) setState({ data: null, loading: false, error: getErrorMessage(error) });
    });
    return () => { active = false; controller.abort(); };
  }, [loader, attempt]);
  return { ...state, reload: () => setAttempt(value => value + 1) };
}
