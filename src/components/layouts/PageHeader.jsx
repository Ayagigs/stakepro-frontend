

const PageHeader = ({ emoji, pageName }) => {
    return (
        <>
            <div className='top_nav'><h3><span>{emoji}</span> {pageName}</h3></div>
        </>
    );
};

export default PageHeader;