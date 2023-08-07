import AccountProfile from "@/components/forms/AccountProfile"
import { currentUser } from "@clerk/nextjs"

async function Page() {

    const user = await currentUser();

    const userInfo = {};

    const userData = {
        id: user?.id,
        objectId: userInfo?._id,
        username: userInfo?.username || user?.username,
        name: userInfo?.name || user?.firstName,
        bio: userInfo?.bio || "",
        image: userInfo?.image || user?.imageUrl,
    }

    return (
        <main className="mx-auto max-w-3xl justify-start px-10 py-20">
            <h3 className="mt-3 text-body-medium text-light-2">Complate your profile to use Voxen</h3>

            <section className="mt-9 bg-dark-2 p-10">
                <AccountProfile user={userData} btnTitle="Continue" />
            </section>
        </main>
    )
}

export default Page