export const Tab = () => {
  const goToBlog = () => {
    window.open("https://nonguplab.tistory.com/");
  };

  return (
    <div className="flex justify-center bg-green-500 px-10 py-3">
      <button className="inline text-xl font-semibold text-gray-600 px-5 hover:text-black">
        농업경제연구소
      </button>
      <button
        className="inline text-xl font-semibold text-gray-600 px-5 hover:text-black"
        onClick={(e) => goToBlog()}
      >
        농업정책연구소
      </button>
    </div>
  );
};
