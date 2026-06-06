import { cn } from '../../utils/cn';

const Container = ({ children, className }) => (
  <div className={cn(
    'mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-8 xl:px-12',
    className
  )}>
    {children}
  </div>
);

export default Container;
