package net.suncaper.wowmall.wowmall.mapper;

import java.util.List;
import net.suncaper.wowmall.wowmall.entity.UmsSmsMember;
import net.suncaper.wowmall.wowmall.entity.UmsSmsMemberExample;
import org.apache.ibatis.annotations.Param;

public interface UmsSmsMemberMapper {
    long countByExample(UmsSmsMemberExample example);

    int deleteByExample(UmsSmsMemberExample example);

    int deleteByPrimaryKey(String id);

    int insert(UmsSmsMember record);

    int insertSelective(UmsSmsMember record);

    List<UmsSmsMember> selectByExample(UmsSmsMemberExample example);

    UmsSmsMember selectByPrimaryKey(String id);

    int updateByExampleSelective(@Param("record") UmsSmsMember record, @Param("example") UmsSmsMemberExample example);

    int updateByExample(@Param("record") UmsSmsMember record, @Param("example") UmsSmsMemberExample example);

    int updateByPrimaryKeySelective(UmsSmsMember record);

    int updateByPrimaryKey(UmsSmsMember record);
}