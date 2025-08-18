export default function Timer({ seconds }) {
  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");
  const progress = (seconds / 60) * 100;

  return (
    <div className="flex flex-col gap-1">
      <div className="font-mono font-bold text-sm">
        ⏱ {mm}:{ss}
      </div>
      <div className="w-full h-2 bg-gray-700 rounded overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
