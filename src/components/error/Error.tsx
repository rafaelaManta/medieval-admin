import { AlertCircle } from "lucide-react";

export const Error = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <AlertCircle className="h-24 w-24 text-red-500" />
        </div>

        <h1 className="text-4xl font-bold text-gray-900">Σφάλμα</h1>

        <div className="space-y-4 text-gray-600">
          <p className="text-lg">
            Λυπούμαστε, αλλά κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά αργότερα.
          </p>

          <p className="text-sm">
            Κωδικός σφάλματος:
            <span className="font-mono bg-gray-100 px-2 py-1 rounded ml-2">
              ERR_500
            </span>
          </p>
        </div>

        <div className="pt-6">
          <button
            className="bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 transition-colors"
            onClick={() => window.location.reload()}
          >
            Ανανέωση Σελίδας
          </button>
        </div>

        <p className="text-sm text-gray-500">
          Εάν το πρόβλημα παραμένει, παρακαλούμε επικοινωνήστε με την υποστήριξη
        </p>
      </div>
    </div>
  );
};
