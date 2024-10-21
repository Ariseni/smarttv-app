export const getChromeVersion = () => {
    const userAgent = navigator.userAgent;
    const match = userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
    
    if (match) {
      return parseInt(match[2], 10);
    }
    
    return null;
  };