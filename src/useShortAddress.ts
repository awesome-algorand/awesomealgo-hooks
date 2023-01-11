const useShortAddress = (address: string, width: number = 6): string => {
  return `${address.slice(0, width)}...${address.slice(-width)}`;
};

export default useShortAddress;
