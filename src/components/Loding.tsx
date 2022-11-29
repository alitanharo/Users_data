
import "../assets/loding.css";


const Loding = () => {
    return (<>

        <div className=" position-absolute bottom-50 end-50 mb-5 p-5">
            <svg className="circle" preserveAspectRatio="xMinYMin meet" width="100px" height="100px" viewBox="0 0 100 100" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="8" stroke="none" fill="#7FB900" fill-rule="evenodd" />
                <circle className="medium" cx="50" cy="50" r="32" stroke="none" fill="#7FB900" fill-opacity="0.2" fill-rule="evenodd" />
                <circle className="large" cx="50" cy="50" r="44" stroke="none" fill="#7FB900" fill-opacity="0.2" fill-rule="evenodd" />
            </svg>
        </div>

    </>);
}

export default Loding;