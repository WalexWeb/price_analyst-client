import { RequestResultsTable } from "./RequestResultsTable";
import { TopSuppliers } from "./TopSuppliers";


interface RequestResponse {
  barcode: string;
  quantity: number;
  productName: string | null;
  supplierName: string | null;
  unitPrice: number | null;
  totalPrice: number | null;
  requiresManualProcessing: boolean;
  message: string;
}

interface UserRequest {
  id: number;
  timestamp: string;
  requestDetails: string;
  responseDetails: RequestResponse[];
}

interface RequestDetailsProps {
  request: UserRequest;
}

export const RequestDetails = ({ request }: RequestDetailsProps) => {
  return (
    <div className="p-4">
      {/* Топ поставщиков с полной информацией */}
      <TopSuppliers request={request} />

      <h4 className="mb-4 font-semibold text-blue-900">
        Результаты анализа ({request.responseDetails.length} товаров)
      </h4>

      <RequestResultsTable request={request} />
    </div>
  );
};
