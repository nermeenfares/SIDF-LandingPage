type MainContainerProps = {
  children: React.ReactNode;
  title?: string;
  Icon?: React.ReactNode;
};

function MainContainer({ children, title, Icon }: MainContainerProps) {
  return (
    <div className="bg-background w-full shadow-[0_4px_10px_rgba(0,0,0,0.1),4px_0_10px_rgba(0,0,0,0.1)] rounded-none transition-colors duration-300">
      <div className="relative flex items-center justify-between mb-6">
        <div className="flex-1 text-right pr-8">
          <h2 className="text-2xl font-bold text-foreground hover:text-primary transition-colors duration-300">
            {title}
          </h2>
        </div>

        {Icon && (
          <div className="relative">
            <div
              className="bg-muted dark:bg-muted h-16 w-32 flex items-center justify-center hover:bg-primary transition-colors duration-300"
              style={{
                clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
            >
              <div className="text-white ml-4">{Icon}</div>
            </div>
          </div>
        )}
      </div>

      <div>{children}</div>
    </div>
  );
}

export default MainContainer;
