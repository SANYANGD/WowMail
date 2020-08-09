package net.suncaper.wowmall.wowmall.service;

import net.suncaper.wowmall.wowmall.entity.UmsMemberLevel;
    

/**
 * @Author: Mr风语恺撒
 * @version: 1.0
 */
public interface UmsMemberLevelService{


    int deleteByPrimaryKey(Long id);

    int insert(UmsMemberLevel record);

    int insertSelective(UmsMemberLevel record);

    UmsMemberLevel selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(UmsMemberLevel record);

    int updateByPrimaryKey(UmsMemberLevel record);

}
