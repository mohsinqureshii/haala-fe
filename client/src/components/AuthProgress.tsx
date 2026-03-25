const AuthProgress = ({ current }: { current: 1|2|3|4|5|6|7 }) => (
  <div className="flex items-center gap-2 mb-8">
    {[1,2,3,4,5,6,7].map(step => (
      <div key={step} className={`h-1.5 flex-1 rounded-full transition-all ${
        step <= current ? 'bg-blue-600' : 'bg-gray-200'
      }`} />
    ))}
    <span className="text-xs text-gray-400 ml-2 shrink-0">{current} of 7</span>
  </div>
);

export default AuthProgress;
