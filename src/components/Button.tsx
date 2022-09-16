import React from 'react';

const Button = ({ styles }: { styles?: string }) => {
  return (
    <button
      type='button'
      className={`${styles} rounded-lg bg-gradient-to-t from-[#33BBCF] to-[#DEF9FA] py-3 px-4 text-sm font-medium shadow-lg shadow-[#214d76aa] outline-none hover:from-[#cdbefa] hover:to-[#557ca0] sm:px-5 sm:py-4 sm:font-medium`}
    >
      Get Started
    </button>
  );
};

export default Button;
