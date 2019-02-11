import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-light text-info mt-5 p-4 text-center">
        Copyright &copy; {new Date().getFullYear()} Juan Dominguez
      </footer>
    </div>
  );
}
