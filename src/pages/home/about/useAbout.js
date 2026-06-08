export function useAbout() {
  const inicioDaBanda = 2021;
  const anosDeCaminhada = new Date().getFullYear() - inicioDaBanda;

  return {
    anosDeCaminhada,
  };
}
