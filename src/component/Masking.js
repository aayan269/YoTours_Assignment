export default function MaskAccountNumber({accountNumber,startingSkip,endingSkip}) {
    const digits = "0123456789";
    const maskedDigits = "X";
    const maskedAccountNumber = [];
  
    let i = 0;
    while (i < accountNumber.length) {
      const char = accountNumber[i];
      if (i >= startingSkip && i < accountNumber.length - endingSkip && digits.includes(char)) {
        maskedAccountNumber.push(maskedDigits);
      } else {
        maskedAccountNumber.push(char);
      }
      i++;
    }
  
    return maskedAccountNumber.join("");
  }