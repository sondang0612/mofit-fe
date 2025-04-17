import { Address as IAddress } from "@/types/api";
import { getFullName } from "@/utils/getFullName";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineDelete } from "react-icons/ai";
import { getFullAddress } from "@/utils/getAddress";
import { MdOutlineAddLocation } from "react-icons/md";
import EditIcon from "@/components/icons/EditIcon";

interface Props {
  data?: IAddress;
  onRemove?: (id?: number) => void;
  onSetDefault?: (id?: number) => void;
  canEdit?: boolean;
  onUpdate?: () => void;
}

const Address = (props: Props) => {
  const { data, canEdit = true, onRemove, onSetDefault, onUpdate } = props;
  return (
    <div className="my-account__address-item relative">
      <div className="my-account__address-item__title">
        <div className="my-account__address-item__title-wrapper">
          <div className="tw-text-textBlack tw-font-bold">Địa chỉ nhận hàng</div>
          {data?.isDefault && <p>Mặc Định</p>}
        </div>
        <div className="d-flex gap-2">
          {canEdit && onUpdate && (
            <div className="hover:tw-cursor-pointer" onClick={onUpdate} data-toggle="tooltip" data-placement="top" title="Chỉnh sửa">
              <EditIcon />
            </div>
          )}
          {canEdit && onRemove && (
            <div data-toggle="tooltip" data-placement="top" title="Xoá">
              <AiOutlineDelete
                size={24}
                color="red"
                className="cursor-pointer"
                onClick={() => onRemove(data?.id)}
              />
            </div>
          )}
          {canEdit && !data?.isDefault && onSetDefault && (
            <div
              data-toggle="tooltip"
              data-placement="top"
              title="Đặt làm mặc định"
            >
              <MdOutlineAddLocation
                size={20}
                onClick={() => onSetDefault(data?.id)}
                className="cursor-pointer"
                color="blue"
              />
            </div>
          )}
        </div>
      </div>
      <div className="tw-text-text">
        <div>
          {getFullName(data?.firstName, data?.lastName)}
        </div>
        <div>
          {data?.streetAddress}
        </div>
        <div>
          {getFullAddress(data)}
        </div>
      </div>
    </div>
  );
};

export default Address;
