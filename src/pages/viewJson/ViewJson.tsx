import { useCombinedStore } from "../../zustand/useCombinedStore";

const ViewJson = () => {
  const { finalForm } = useCombinedStore();

  return (
    <div className="p-6 text-left">
      <h2 className="text-xl font-bold mb-4">📄 JSON Output</h2>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
        {JSON.stringify(finalForm, null, 2)}
      </pre>
    </div>
  );
};

export default ViewJson;