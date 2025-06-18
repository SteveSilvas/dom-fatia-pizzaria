export interface IPageTemplateProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
};

const PageTemplate: React.FC<IPageTemplateProps> = ({ children, id, className }) => {
    return(
         <div id={id} className={`relative min-h-[calc(100vh-3.25rem)] flex flex-col scroll-mt-13 md:scroll-mt-15 ${className}`}>
            {children}
         </div>
    );
};

export default PageTemplate;