type LoadingType = {
  message: string;
};

export const LoadingBlock: React.FC<LoadingType> = ({ message }) => {
  return (
    <div className="w-full h-[80vh] flex flex-col justify-center items-center gap-4">
      <p className="text-xl p-2 text-slate-500">{message}</p>
    </div>
  );
};
