export default function Profile() {
    return (
        <main>
            <div className="flex-col p-4">
                <img src="vercel.svg" alt="" className="rounded-full hover:rounded-none transition-all h-20 w-20 bg-blue-400" style={{ borderRadius: '50%' }} />
                <h1 className="font-medium text-4xl">{"Polabiel"}</h1>
                <p className="font-extralight text-sm">Joined 22 Jul 2024</p>
                <h2 className="font-medium">Bio</h2>
                <p className="font-normal text-sm">Hi my name is Gabriel Oliveira, i'm student Dev System's</p>
            </div>
        </main>
    );
}