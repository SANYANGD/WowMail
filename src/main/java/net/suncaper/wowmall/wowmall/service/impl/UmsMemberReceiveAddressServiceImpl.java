package net.suncaper.wowmall.wowmall.service.impl;

import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import net.suncaper.wowmall.wowmall.mapper.UmsMemberReceiveAddressMapper;
import net.suncaper.wowmall.wowmall.entity.UmsMemberReceiveAddress;
import net.suncaper.wowmall.wowmall.service.UmsMemberReceiveAddressService;


/**
 * @Author: Mr风语恺撒
 * @version: 1.0
 */
@Service
public class UmsMemberReceiveAddressServiceImpl implements UmsMemberReceiveAddressService{

    @Resource
    private UmsMemberReceiveAddressMapper umsMemberReceiveAddressMapper;

    @Override
    public int deleteByPrimaryKey(Long id) {
        return umsMemberReceiveAddressMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(UmsMemberReceiveAddress record) {
        return umsMemberReceiveAddressMapper.insert(record);
    }

    @Override
    public int insertSelective(UmsMemberReceiveAddress record) {
        return umsMemberReceiveAddressMapper.insertSelective(record);
    }

    @Override
    public UmsMemberReceiveAddress selectByPrimaryKey(Long id) {
        return umsMemberReceiveAddressMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKeySelective(UmsMemberReceiveAddress record) {
        return umsMemberReceiveAddressMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(UmsMemberReceiveAddress record) {
        return umsMemberReceiveAddressMapper.updateByPrimaryKey(record);
    }

}
