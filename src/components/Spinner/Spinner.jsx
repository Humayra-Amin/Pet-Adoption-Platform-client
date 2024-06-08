const Spinner = () => {
    return (
        <div className="flex justify-center">
            <span className="loading loading-infinity text-success loading-xs size-12"></span>
            <span className="loading loading-infinity text-success loading-sm size-14"></span>
            <span className="loading loading-infinity text-success loading-md size-16"></span>
            <span className="loading loading-infinity text-success loading-lg size-20"></span>
        </div>
    );
};

export default Spinner;