package org.horx.wdf.sample.simple.controller;

import org.horx.common.utils.JsonUtils;
import org.horx.wdf.sys.annotation.AccessPermission;
import org.horx.wdf.sys.dto.DictItemDTO;
import org.horx.wdf.sys.service.DictService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 资产页面Controller。
 */
@Controller
@RequestMapping("/page/sample/asset")
public class AssetPageController {

    @Autowired
    private DictService dictService;

    /**
     * 列表页面。
     * @return
     */
    @AccessPermission("sample.asset.query")
    @RequestMapping("/list")
    public ModelAndView list() {
        ModelAndView mav = new ModelAndView();
        mav.addObject("dict", genDict());
        mav.setViewName("sample/asset/list");
        return mav;
    }

    /**
     * 新增页面。
     * @return
     */
    @AccessPermission("sample.asset.create")
    @RequestMapping("/create")
    public ModelAndView create() {
        ModelAndView mav = new ModelAndView();
        mav.addObject("dict", genDict());
        mav.setViewName("sample/asset/edit");
        return mav;
    }

    /**
     * 修改页面。
     * @param id
     * @return
     */
    @AccessPermission("sample.asset.modify")
    @RequestMapping("/modify/{id}")
    public ModelAndView modify(@PathVariable("id") Long id) {
        ModelAndView mav = new ModelAndView();
        mav.addObject("id", id);
        mav.addObject("dict", genDict());
        mav.setViewName("sample/asset/edit");
        return mav;
    }

    /**
     * 生成字典。
     * @return
     */
    private String genDict() {
        Map<String, List<DictItemDTO>> dict = new HashMap<>();

        List<DictItemDTO> assetStatusList = dictService.queryEnabledItemList("SampleAssetStatus");
        dict.put("assetStatus", assetStatusList);

        return JsonUtils.toJson(dict);
    }
}
