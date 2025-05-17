


export function LoginPage() {

    return (
        <div class="container mx-auto p-4 max-w-md md:max-w-2xl">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">اسم المستخدم</label>
                    <input class="w-full px-3 py-2 border rounded" type="text"/>
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2">كلمة المرور</label>
                    <input class="w-full px-3 py-2 border rounded" type="password"/>
                </div>
                <div class="flex flex-col sm:flex-row items-center justify-between">
                    <button class="bg-blue-500 text-white px-4 py-2 rounded mb-2 sm:mb-0 w-full sm:w-auto">
                        تسجيل الدخول
                    </button>
                    <a href="#" class="text-blue-500 text-sm">نسيت كلمة المرور؟</a>
                </div>
            </form>
        </div>
    );
}