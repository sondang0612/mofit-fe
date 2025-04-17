"use client";

import { useDeleteAddress } from "@/hooks/react-query/addresses/useDeleteAddress";
import { useSetDefaultAddress } from "@/hooks/react-query/addresses/useSetDefaultAddress";
import { useFetch } from "@/hooks/react-query/useFetch";
import { Address as IAddress } from "@/types/api";
import { ITEMS_PER_PAGE } from "@/utils/constants";
import { apiEndpoints } from "@/utils/constants/apiEndpoints";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import List from "../homes/home-1/List";
import Pagination from "../shoplist/Pagination";
import Address from "./address/Address";
import AddressModal from "./address/AddressModal";
import SkeletonAddress from "./address/SkeletonAddress";

export default function EditAddress() {
  const { mutate: deleteAddress } = useDeleteAddress();
  const { mutate: setDefaultAddress } = useSetDefaultAddress();
  const [currentPage, setCurrentPage] = React.useState(1);
  const {
    data: addresses,
    isFetching,
    totalElements,
  } = useFetch<IAddress>({
    page: currentPage,
    endpoint: apiEndpoints.ADDRESSES,
    limit: ITEMS_PER_PAGE,
  });
  const [modalState, setModalState] = React.useState({
    isAdd: true,
    address: null,
    isOpen: false,
  });


  const onClose = () => {
    setModalState({ ...modalState, isOpen: false, address: null });
  };

  const onPageChange = (page: number) => {

    setCurrentPage(page);
  };

  const renderItem = React.useCallback(({ data }: { data: IAddress }) => {
    return (
      <Address
        data={data}
        key={data?.id}
        onRemove={(id) => deleteAddress({ id })}
        onUpdate={() => {
          setModalState({
            ...modalState, address: data as any, isOpen: true, isAdd: false,
          })
        }}
        onSetDefault={(id) => setDefaultAddress({ id })}
      />
    );
  }, []);

  return (
    <div className="col-lg-9">
      <div className="page-content my-account__address">
        <p className="notice">Sổ địa chỉ</p>
        <div className="add-new" onClick={() => {
          setModalState({ ...modalState, isOpen: true, isAdd: true, address: null });
        }}>
          <div className="tw-size-[48px] tw-flex tw-items-center tw-justify-center tw-bg-[#F0F8FF] tw-rounded">
            <AiOutlinePlus size={18} color="#1890FF" />
          </div>
          <span>Thêm địa chỉ mới</span>
        </div>
        <div className="mb-4">
          <List
            data={addresses}
            isFetching={isFetching}
            renderItem={renderItem}
            className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-x-4 tw-gap-y-2"
            n={2}
            skeleton={SkeletonAddress}
          />
        </div>
        <Pagination totalItems={totalElements} onChange={onPageChange} />
      </div>

      <AddressModal isOpen={modalState.isOpen} address={modalState.address as any} isAdd={modalState.isAdd} onClose={onClose} />
    </div>
  );
}
