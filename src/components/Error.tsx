type ErrorType = {
  error?: Error;
};

export const Error: React.FC<ErrorType> = ({ error }) => {
  return (
    <div className="w-full h-[80vh] flex flex-col justify-center items-center gap-4">
      <p className="text-xl p-20 border-2 border-slate-300 rounded-xl text-slate-500">
        Sorry, we're having some issues fetching your news. <br />
        Please try again soon!
      </p>
      {!!error?.message && (
        <p className="text-lg text-rose-500 opacity-70">{error?.message}</p>
      )}
    </div>
  );
};
