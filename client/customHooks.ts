import React from "react";

export function useOnMount(handler: React.EffectCallback) {
  return React.useEffect(handler, []);
}
