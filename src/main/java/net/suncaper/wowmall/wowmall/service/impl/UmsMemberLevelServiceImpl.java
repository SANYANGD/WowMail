package net.suncaper.wowmall.wowmall.service.impl;

import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import net.suncaper.wowmall.wowmall.entity.UmsMemberLevel;
import net.suncaper.wowmall.wowmall.mapper.UmsMemberLevelMapper;
import net.suncaper.wowmall.wowmall.service.UmsMemberLevelService;


/**
 * @Author: Mr风语恺撒
 * @version: 1.0
 */
@Service
public class UmsMemberLevelServiceImpl implements UmsMemberLevelService{

    @Resource
    private UmsMemberLevelMapper umsMemberLevelMapper;

    @Override
    public int deleteByPrimaryKey(Long id) {
        return umsMemberLevelMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(UmsMemberLevel record) {
        return umsMemberLevelMapper.insert(record);
    }

    @Override
    public int insertSelective(UmsMemberLevel record) {
        return umsMemberLevelMapper.insertSelective(record);
    }

    @Override
    public UmsMemberLevel selectByPrimaryKey(Long id) {
        return umsMemberLevelMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKeySelective(UmsMemberLevel record) {
        return umsMemberLevelMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(UmsMemberLevel record) {
        return umsMemberLevelMapper.updateByPrimaryKey(record);
    }

}
