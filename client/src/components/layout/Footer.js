import React from 'react';

export default () => {
  return (
    // mt = margin top, p = padding
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      Copyright &copy; {new Date().getFullYear()} DevConnector
    </footer>
  );
}