const formatNumber = (num: number) => {
  return num.toLocaleString("en-US", { maximumFractionDigits: 0 });
};

export default formatNumber;
