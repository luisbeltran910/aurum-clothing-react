import Image from "next/image";

// We can nest functions into other functions like this button wow
function MyButton() { 
  return (
    <button>
      I'm a button
      </button>
  );
}

export default function Home() {
  return (
    <div>
      <h1>Welcome to Aurum Clothing Store</h1>
      <p>Still a work in progress :D</p>
      <MyButton />
    </div>
  );
}