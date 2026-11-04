
function PageHeading({ title, description }) {
    return (
        <div className="page-heading">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
}

export default PageHeading;
