package net.suncaper.wowmall.wowmall.service;

import net.suncaper.wowmall.wowmall.entity.UmsMemberReceiveAddress;
    

/**
 * @Author: Mr风语恺撒
 * @version: 1.0
 */
public interface UmsMemberReceiveAddressService{


    int deleteByPrimaryKey(Long id);

    int insert(UmsMemberReceiveAddress record);

    int insertSelective(UmsMemberReceiveAddress record);

    UmsMemberReceiveAddress selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(UmsMemberReceiveAddress record);

    int updateByPrimaryKey(UmsMemberReceiveAddress record);

}
