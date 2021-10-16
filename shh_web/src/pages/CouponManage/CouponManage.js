import PropTypes from "prop-types";
import Qs from "query-string";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CTLoading, useLoading, useCoupon } from "../../components";
import CouponManageView from "./CouponManageView";

const CouponManage = () => {
  const {
    coupon, couponPost, couponPut, couponList, couponGetAll, couponRemove,
  } = useCoupon();
  const { loading, setLoading } = useLoading(true);
  const [couponInfo, setCouponInfo] = useState(null);
  // const [show, setShow] = useState(false);

  const location = useLocation();
  const storeId = sessionStorage.getItem("currentStoreId");
  if (storeId == null) {
    alert("로그인 후, 상점을 선택하고 이용해주세요");
    document.location.href = "/";
  }

  // const query = Qs.parse(location.search);

  // console.log(query);
  // console.log(Qs.stringify(query));

  const fetch = async () => {
    try {
      await couponGetAll(storeId, "");
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const [data, setData] = couponInfo ? useState({
    couponId: coupon.couponId,
    name: coupon.name,
    storeId: coupon.storeId,
    available: coupon.available,
    description: coupon.description,
    validity: coupon.validity,
    startDate: coupon.startDate,
    finishDate: coupon.finishDate,
  }) : useState({
    couponId: null,
    name: "",
    storeId,
    available: true,
    description: "",
    validity: null,
    startDate: "",
    finishDate: "",
  });

  const updateCoupon = async () => {
    try {
      // if (data.email.length <= 0 || data.newPassword.length <= 0) {
      //   alert("정확한 정보를 입력해 주세요.");
      //   return;
      // }
      await setLoading(true);
      await couponPut(data.couponId, {
        couponId: data.couponId,
        name: data.name,
        storeId: data.storeId,
        available: data.available,
        description: data.description,
        validity: data.validity,
        startDate: data.startDate,
        finishDate: data.finishDate,
      });
      fetch();
    } catch (err) {
      console.log(err);
    } finally {
      await setLoading(false);
    }
  };

  const insertCoupon = async () => {
    try {
      await setLoading(true);
      await couponPost({
        couponId: null,
        name: data.name,
        storeId,
        available: true,
        description: data.description,
        validity: data.validity,
        startDate: data.startDate,
        finishDate: data.finishDate,
      });
      fetch();
    } catch (e) {
      console.log(e);
    } finally {
      await setLoading(false);
    }
  };

  const removeCoupon = async (rCoupon) => {
    try {
      await setLoading(true);
      await couponRemove(rCoupon);
      fetch();
    } catch (e) {
      console.log(e);
    } finally {
      await setLoading(false);
    }
  };

  return (
    loading ? (
      <CTLoading />
    ) : (
      <CouponManageView
        total={couponList.total}
        results={couponList.results}
        remove={removeCoupon}
        insert={insertCoupon}
        update={updateCoupon}
        data={data}
        setData={setData}
        couponInfo={couponInfo}
        setCouponInfo={setCouponInfo}
      />
    )

  );
};

export default CouponManage;
