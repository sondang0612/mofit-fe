import { Address as IAddress } from "@/types/api";
import { getFullName } from "@/utils/getFullName";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineDelete } from "react-icons/ai";
import { getFullAddress } from "@/utils/getAddress";
import { MdOutlineAddLocation } from "react-icons/md";
import EditIcon from "@/components/icons/EditIcon";
import { useRouter } from "next/navigation";

interface Props {
  data?: IAddress;
  onRemove?: (id?: number) => void;
  onSetDefault?: (id?: number) => void;
  canEdit?: boolean;
  onUpdate?: () => void;
}

const AddressCart = (props: Props) => {
  const { data } = props;
  const router = useRouter();
  return (
    <div className="tw-text-[#333333]">
      <div className="tw-flex tw-items-center tw-justify-between">
        <div className="tw-font-bold tw-flex tw-items-center tw-gap-1">
          <div className="">Địa chỉ nhận hàng</div>
          {data?.isDefault && (
            <div className="tw-text-[#9B9B9B] tw-text-sm">Mặc định</div>
          )}
        </div>
        <div
          className="hover:tw-cursor-pointer"
          onClick={() => router.push("/account_edit_address")}
          data-toggle="tooltip"
          data-placement="top"
          title="Chỉnh sửa"
        >
          <EditIcon />
        </div>
      </div>
      <div className="tw-text-sm tw-mt-1">
        <div>{getFullName(data?.firstName, data?.lastName)}</div>
        <div>{data?.streetAddress}</div>
        <div>{getFullAddress(data)}</div>
      </div>
    </div>
  );
};

export default AddressCart;
