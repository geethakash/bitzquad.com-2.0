import { LayoutAdmin } from "../../components";

const Contact = () => {
  return (
    <LayoutAdmin>
      <main className="flex-1">
        <div className="py-6">
          <div className="mx-auto px-4 sm:px-6 md:px-8 pb-3 border-b border-gray-200">
            <h1 className="text-2xl font-semibold text-gray-900">Contact</h1>
          </div>
          <div className="mx-auto px-4 sm:px-6 md:px-8">
            {/* Replace with your content */}
            <div className="py-4">
              <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
            </div>
            {/* /End replace */}
          </div>
        </div>
      </main>
    </LayoutAdmin>
  );
};

export default Contact;