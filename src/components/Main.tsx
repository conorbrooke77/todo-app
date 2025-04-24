export default function Main() {
  return (
    <main className="flex flex-col items-center justify-center mt-13">
      <h1 className="text-6xl font-bold text-center text-white mb-10">
        Welcome to React
      </h1>

      <ul
        id="facts-list"
        className="text-white p-4 space-y-4 list-disc list-inside text-xl"
      >
        <li>React is a JavaScript library for building user interfaces.</li>
        <li>
          It allows developers to create large web applications that can change
          data, without reloading the page.
        </li>
        <li>React is fast, scalable, and simple.</li>
        <li>
          It works only on user interfaces in web and mobile applications.
        </li>
        <li>React is maintained by Facebook.</li>
      </ul>
    </main>
  );
}
