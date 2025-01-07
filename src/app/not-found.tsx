"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex flex-col items-center gap-2">
          <div className="text-8xl font-bold text-gray-200">404</div>
          <Search className="h-16 w-16 text-gray-400" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900">
          Η Σελίδα Δεν Βρέθηκε
        </h1>

        <div className="space-y-4 text-gray-600">
          <p className="text-lg">
            Η σελίδα που αναζητάτε έχει μετακινηθεί, διαγραφεί ή δεν υπήρξε
            ποτέ.
          </p>

          <p className="text-base">
            Βεβαιωθείτε ότι έχετε πληκτρολογήσει σωστά τη διεύθυνση URL.
          </p>
        </div>

        <div className="pt-6 space-y-4">
          <button
            className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            onClick={() => router.push("/")}
          >
            Επιστροφή στην Αρχική
          </button>

          <button
            className="block w-full text-gray-500 hover:text-gray-700 transition-colors"
            onClick={() => router.back()}
          >
            Επιστροφή στην Προηγούμενη Σελίδα
          </button>
        </div>

        <p className="text-sm text-gray-500">
          Εάν πιστεύετε ότι πρόκειται για σφάλμα, επικοινωνήστε με την
          υποστήριξη
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
