const Editor = () => {
    return (
        <div className='flex h-full items-center justify-center'>
            <div className='w-full max-w-96'>
                <img
                    src='/leaf@56.svg'
                    alt='Editor'
                    className='aspect-square w-full max-w-96 opacity-80'
                />
                <div className='my-3'>
                    <h1 className='text-center text-2xl font-bold'>Editor</h1>
                    <p className='mt-2 text-center text-sm text-(--foreground-secondary)'>
                        Start editing to see some magic happen!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Editor;
