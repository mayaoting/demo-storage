

$(document).ready(function() {
  var AFFIX_TOP = $('.header-img').height();
  var $affixMenu = $('.docs-nav');
  var contentMinHeight = $affixMenu.height();
  var $docContent = $('.docs-content');
  $docContent.css('min-height',`${contentMinHeight}px`)
  $docContent.html(dynamic('all'))
  var $li = document.getElementsByTagName('li');
  for(let i = 0; i<$li.length; i++) {
    $li[i].onclick = function() {
      $(this).siblings().removeClass('active')
      $(this).addClass('active');
      let href = $(this)[0].childNodes[0].hash;
      if(href) {
        let text = href.slice(1);
        $docContent.html(dynamic(text));
      }
    }
  } 
  $(window).on('scroll',function() {
    var top = window.screenY || window.pageYOffset;
    // var fixstatus = true;
    if(top > AFFIX_TOP ) {
      $affixMenu.addClass("fixed");
    } else {
      $affixMenu.removeClass("fixed");
    }
  })
})
function dynamic(href) {
  var len = portalData[href].list.length;
  var card='';
  for(let i=0; i< len; i++) {
    card += `
      <div class="product-card-wrap">
        <a href="${portalData[href].list[i].href}" target="_blank">
          <div class="product-card-wrap-log">
            <img src=${portalData[href].list[i].img}>
          </div>
          <div class="product-card-wrap-name">
            <p>${portalData[href].list[i].title}</p>
          </div>
          <div class="product-card-wrap-introduce">
            <div>${portalData[href].list[i].des}</div>
          </div>
          <div class="product-card-wrap-link">
            <p>
              <a href="${portalData[href].list[i].href}" class="card-link" target="_blank">   
              </a>
            </p>
          </div>
        </a>
      </div> 
    `
  } 
  var html = `
  <div  class="${href}">
    <p class="list-title">${portalData[href].title}</p>
    <div class="product-card"> 
    ${card}
    </div> 
  </div>`
  return html;
}

var portalData = {
  ross: {
    title: 'ROSS',
    list: [{
        img: './assets/ROSS.png',
        title: 'ROSS一体化工作台',
        des: '店铺运营中心，包括计划管理（销售计划、商品上新计划），任务管理 （店铺自定义任务、商品批量上新任务），店铺工作日历，店铺运营知识库，店铺工作流管理。',
        href:'https://ross.baozun.com/'
      },{
      img: './assets/商品家.png',
      title: '商品家',
      des: '商品家是宝尊TIC研发的一款基于图片、文字识别技术的，能够在多电商渠道，智能化、自动化、批量化进行详情页制作、商品上新的，线上SaaS化系统。',
      href:'https://pim.baozun.com/#/'
    }, {
        img: './assets/设计家.png',
        title: '设计家',
        des: 'Speedio是宝尊TIC研发的一款基于图片识别技术的，能够智能化、自动化、批量化进行各类图片相关任务的，并且能够进行设计素材管理与分享的，线上SaaS化系统。',
        href:'https://design.baozun.com/index'
      }, {
        img: './assets/活动家.png',
        title: '活动家',
        des: '活动家是什么 活动家是一款针对多电商平台（天猫、京东、…）各类型活动，批量处理活动商品素材整理和并同步到电商平台，完成活动商品自动化报名和多活动统一管理的平台。',
        href:'https://activity.baozun.com/'
      }]
  },
  unex: {
	    title: 'UNEX',
	    list: [{
	      img: './assets/SHOPKEEPER.png',
	      title: 'SHOPKEEPER',
	      des: '面向品牌商城（官方商城/小程序商城等）运营人员的商城运营管理平台。提供订单管理、商品管理、营销管理、支付管理、会员管理、店铺页面管理、基础设置等全方位商城运营管理服务。',
	      href:'https://shopkeeper.baozun.com/'
	    }, {
		      img: './assets/SHOPKEEPER.png',
		      title: 'SHOPKEEPER - AWS',
		      des: '面向品牌商城（官方商城/小程序商城等）运营人员的商城运营管理平台。提供订单管理、商品管理、营销管理、支付管理、会员管理、店铺页面管理、基础设置等全方位商城运营管理服务。',
		      href:'https://shopkeeper-aws.baozun.com/'
		    },{
	      img: './assets/UNEX-AMDIN.png',
	      title: 'UNEXADMIN管理平台',
	      des: '面向UNEX内部运营人员的管理后台，提供日常业务运营中全局性的配置服务、查询等服务。',
	      href:'https://unexadmin.baozun.com/'
	    },{
		      img: './assets/UNEX-AMDIN.png',
		      title: 'UNEXADMIN管理平台 - AWS',
		      des: '面向UNEX内部运营人员的管理后台，提供日常业务运营中全局性的配置服务、查询等服务。',
		      href:'https://unexadmin-aws.baozun.com/'
		    }]
	},
  oms: {
	    title: 'OMS',
	    list: [{
	      img: './assets/OMS.png',
	      title: 'OMS4.0',
	      des: 'OMS4.0集订单服务、促销服务、发票服务、库存服务、出入库管理、基础信息管理、结算服务于一体，承载品牌全网业务中枢管理职能。',
	      href:'https://oms4.baozun.com'
	    }, {
	      img: './assets/OMS.png',
	      title: 'OMS3.0（PACS）',
	      des: '负责非天猫（非淘系）店铺的订单履约。例如京东、网易卡拉、小红书和官方商城等；主要功能有销售订单管理、退换货管理、退款管理和促销管理等。同时承担宝尊ERP的职责，例如采购单、负向采购单、内部流程管理，以及把销售结果数据对接给EBS和品牌ERP进行入账。',
	      href:'https://oms.baozun.com'
	    }, {
	      img: './assets/OMS.png',
	      title: 'OMS3.0（TOMS）	',
	      des: '负责天猫（淘系）店铺的订单履约。主要功能有销售订单管理、退换货管理、退款管理和促销管理等。',
	      href:'https://toms.baozun.com'
	    },{
	      img: './assets/HUB.png',
	      title: 'HUB业务接口平台',
	      des: 'HUB制定标准通信协议来实现不同系统之间的打通。并且根据接口的作用制定标准化场景，现在已有8大场景：OMS-平台；OMS-WMS；OMS-ERP；CRM场景；物流服务场景；基础配置场景；电子发票场景；shopdog对接平台场景',
	      href:'http://pro.hub4.baozun.cn'
	    },{
	      img: './assets/shopdog.png',
	      title: '驻店宝（Shopdog）',
	      des: '驻店宝是一款基于多平台的移动应用，为品牌打造全链路O2O运营及线下数字门店。可以实现5大O2O场景：门店发货，门店自提，门店退货，门店换货，门店下线上订单。并可以对接线上多个平台，如天猫，京东，微商城/小程序，品牌独立官网，实现真正的全渠道零售。',
	      href:'http://op.shopdog.com.cn'	  
	    }]
	},
  logistics: {
      title: 'WMS',
      list: [{
        img: './assets/WMSlogo4.0.png',
        title: 'WMS4.0 - WEB',
        des: '集柔性适配、智能算法、丰富场景、优越性能于一体，为品牌2B、2C仓配一体业务提供强有力的系统和技术支撑。',
        href:'https://wms.baozun.com/'
      },{
        img: './assets/WMSlogo4.0.png',
        title: 'WMS4.0 - 操作台',
        des: '集柔性适配、智能算法、丰富场景、优越性能于一体，为品牌2B、2C仓配一体业务提供强有力的系统和技术支撑。',
        href:'http://wmsconsole.baozun.com/login'
      },{
        img: './assets/WMSlogo4.0.png',
        title: 'WMS4.0 - PDA',
        des: '集柔性适配、智能算法、丰富场景、优越性能于一体，为品牌2B、2C仓配一体业务提供强有力的系统和技术支撑。',
        href:'http://wmspda.baozun.com/login'
      },{
        img: './assets/TMS.png',
        title: 'TMS',
        des: '整合国内快递物流公司系统，形成统一标准接口。为企业的线下门店仓、电商ERP、电商平台、电商仓储）系统。提供物流跟踪、电子面单、智选物流、财务结算、整车线路规划、数据分析等服务。',
        href:'http://lmis.baotonglogistics.com'
      }]
  },
  dma: {
      title: '大数据',
      list: [{
        img: './assets/BizWise.png',
        title: 'BI 平台',
        des: '负责OMS/WMS的数据报表展现，用户基于BI系统可以查询店铺/集团/客户的销售/物流/运营报表。',
        href:'https://bi.baozun.com/prod'
      }, {
        img: './assets/BizWise.png',
        title: '宝尊微智',
        des: '基于大数据平台的数据分析系统，面向财务/供应链/业务运营/实时Dashboard进行主题化分析，洞察业务趋势。',
        href:'http://bizwise.baozun.com'
      },{
        img: './assets/CRM.png',
        title: 'CRM（SHOPCAT）',
        des: 'Shopcat是一款全渠道的客户关系管理平台。可帮助品牌完成多渠道会员数据整合，并且支持会员相关的营销沟通、活动设定、报表分析。目前可完成天猫、京东、微信、官网及线下渠道的会员整合。',
        href:'https://sc.baozun.com/'
      }]
  },
  coreApplication: {
	    title: '基础服务',
	    list: [ {
	      img: './assets/管理平台.png',
	      title: '平台管理',
	      des: '通用服务管理平台，为接入方提供大量安全、稳定、高效的开箱即用的工具，为接入方快速拓展业务提供便利。',
	      href:'https://pc.baozun.com/'
	    },{
	      img: './assets/管理平台.png',
	      title: '平台管理 - 新版',
	      des: '新版的平台管理，在原有平台基础上提供了更多的开箱即用的工具，如：业务链路监控。',
	      href:'http://pc-v3.baozun.com/'
	    }, {
	      img: './assets/搜索服务.png',
	      title: '搜索服务',
	      des: '高性能的全文检索服务，提供同义词、联想词、敏感词等功能，帮助接入方在海量数据中进行快速查询。',
	      href:'http://search.baozun.com'
	    }, {
	      img: './assets/搜索服务.png',
	      title: '搜索服务 - 海外',
	      des: '高性能的全文检索服务，提供同义词、联想词、敏感词等功能，帮助接入方在海量数据中进行快速查询。',
	      href:'http://search-aws.baozun.com'
	    },{
	      img: './assets/message.png',
	      title: '消息平台',
	      des: '一站式的消息发送平台，包含短信、邮件、企业微信的发送方式，帮助接入方快速拥有全平台消息通知能力。',
	      href:'http://messenger.baozun.com/#/login'
	    }, {
	      img: './assets/Skywalking.png',
	      title: 'Skywalking',
	      des: '分布式应用的性能监控工具，提供大量图表帮助工程师快速发现应用的性能瓶颈。',
	      href:'http://skywalking-ui-prod.baozun.com/'
	    },{
	      img: './assets/apollo.png',
	      title: 'Apollo',
	      des: '集中化配置管理中心，能够集中化管理应用不同环境、不同集群的配置，配置修改后能够实时推送到应用端，并且具备规范的权限、流程治理等特性。',
	      href:'http://apollo.baozunops.com'
	    }]
	},
  all: {
    title: '全部产品',
    list: [{
        img: './assets/ROSS.png',
        title: 'ROSS一体化工作台',
        des: '店铺运营中心，包括计划管理（销售计划、商品上新计划），任务管理 （店铺自定义任务、商品批量上新任务），店铺工作日历，店铺运营知识库，店铺工作流管理。',
        href:'https://ross.baozun.com/'
      },{
      img: './assets/商品家.png',
      title: '商品家',
      des: '商品家是宝尊TIC研发的一款基于图片、文字识别技术的，能够在多电商渠道，智能化、自动化、批量化进行详情页制作、商品上新的，线上SaaS化系统。',
      href:'https://pim.baozun.com/#/'
    }, {
        img: './assets/设计家.png',
        title: '设计家',
        des: 'Speedio是宝尊TIC研发的一款基于图片识别技术的，能够智能化、自动化、批量化进行各类图片相关任务的，并且能够进行设计素材管理与分享的，线上SaaS化系统。',
        href:'https://design.baozun.com/index'
      }, {
        img: './assets/活动家.png',
        title: '活动家',
        des: '活动家是什么 活动家是一款针对多电商平台（天猫、京东、…）各类型活动，批量处理活动商品素材整理和并同步到电商平台，完成活动商品自动化报名和多活动统一管理的平台。',
        href:'https://activity.baozun.com/'
      },{
	      img: './assets/SHOPKEEPER.png',
	      title: 'SHOPKEEPER',
	      des: '面向品牌商城（官方商城/小程序商城等）运营人员的商城运营管理平台。提供订单管理、商品管理、营销管理、支付管理、会员管理、店铺页面管理、基础设置等全方位商城运营管理服务。',
	      href:'https://shopkeeper.baozun.com/'
	    }, {
		      img: './assets/SHOPKEEPER.png',
		      title: 'SHOPKEEPER - AWS',
		      des: '面向品牌商城（官方商城/小程序商城等）运营人员的商城运营管理平台。提供订单管理、商品管理、营销管理、支付管理、会员管理、店铺页面管理、基础设置等全方位商城运营管理服务。',
		      href:'https://shopkeeper-aws.baozun.com/'
		    },{
	      img: './assets/UNEX-AMDIN.png',
	      title: 'UNEXADMIN管理平台',
	      des: '面向UNEX内部运营人员的管理后台，提供日常业务运营中全局性的配置服务、查询等服务。',
	      href:'https://unexadmin.baozun.com/'
	    },{
		      img: './assets/UNEX-AMDIN.png',
		      title: 'UNEXADMIN管理平台 - AWS',
		      des: '面向UNEX内部运营人员的管理后台，提供日常业务运营中全局性的配置服务、查询等服务。',
		      href:'https://unexadmin-aws.baozun.com/'
		    },{
	      img: './assets/OMS.png',
	      title: 'OMS4.0',
	      des: 'OMS4.0集订单服务、促销服务、发票服务、库存服务、出入库管理、基础信息管理、结算服务于一体，承载品牌全网业务中枢管理职能。',
	      href:'https://oms4.baozun.com'
	    }, {
	      img: './assets/OMS.png',
	      title: 'OMS3.0（PACS）',
	      des: '负责非天猫（非淘系）店铺的订单履约。例如京东、网易卡拉、小红书和官方商城等；主要功能有销售订单管理、退换货管理、退款管理和促销管理等。同时承担宝尊ERP的职责，例如采购单、负向采购单、内部流程管理，以及把销售结果数据对接给EBS和品牌ERP进行入账。',
	      href:'https://oms.baozun.com'
	    }, {
	      img: './assets/OMS.png',
	      title: 'OMS3.0（TOMS）	',
	      des: '负责天猫（淘系）店铺的订单履约。主要功能有销售订单管理、退换货管理、退款管理和促销管理等。',
	      href:'https://toms.baozun.com'
	    },{
	      img: './assets/HUB.png',
	      title: 'HUB业务接口平台',
	      des: 'HUB制定标准通信协议来实现不同系统之间的打通。并且根据接口的作用制定标准化场景，现在已有8大场景：OMS-平台；OMS-WMS；OMS-ERP；CRM场景；物流服务场景；基础配置场景；电子发票场景；shopdog对接平台场景',
	      href:'http://pro.hub4.baozun.cn'
	    },{
	      img: './assets/shopdog.png',
	      title: '驻店宝（Shopdog）',
	      des: '驻店宝是一款基于多平台的移动应用，为品牌打造全链路O2O运营及线下数字门店。可以实现5大O2O场景：门店发货，门店自提，门店退货，门店换货，门店下线上订单。并可以对接线上多个平台，如天猫，京东，微商城/小程序，品牌独立官网，实现真正的全渠道零售。',
	      href:'http://op.shopdog.com.cn'	  
	    },{
		      img: './assets/WMSlogo4.0.png',
		      title: 'WMS4.0 - WEB',
		      des: '集柔性适配、智能算法、丰富场景、优越性能于一体，为品牌2B、2C仓配一体业务提供强有力的系统和技术支撑。',
		      href:'https://wms.baozun.com/'
		    },{
		      img: './assets/WMSlogo4.0.png',
		      title: 'WMS4.0 - 操作台',
		      des: '集柔性适配、智能算法、丰富场景、优越性能于一体，为品牌2B、2C仓配一体业务提供强有力的系统和技术支撑。',
		      href:'http://wmsconsole.baozun.com/login'
		    },{
		      img: './assets/WMSlogo4.0.png',
		      title: 'WMS4.0 - PDA',
		      des: '集柔性适配、智能算法、丰富场景、优越性能于一体，为品牌2B、2C仓配一体业务提供强有力的系统和技术支撑。',
		      href:'http://wmspda.baozun.com/login'
		    },{
		      img: './assets/TMS.png',
		      title: 'TMS',
		      des: '整合国内快递物流公司系统，形成统一标准接口。为企业的线下门店仓、电商ERP、电商平台、电商仓储）系统。提供物流跟踪、电子面单、智选物流、财务结算、整车线路规划、数据分析等服务。',
		      href:'http://lmis.baotonglogistics.com'
		    },{
		      img: './assets/BizWise.png',
		      title: 'BI 平台',
		      des: '负责OMS/WMS的数据报表展现，用户基于BI系统可以查询店铺/集团/客户的销售/物流/运营报表。',
		      href:'https://bi.baozun.com/prod'
		    }, {
		      img: './assets/BizWise.png',
		      title: '宝尊微智',
		      des: '基于大数据平台的数据分析系统，面向财务/供应链/业务运营/实时Dashboard进行主题化分析，洞察业务趋势。',
		      href:'http://bizwise.baozun.com'
		    },{
		      img: './assets/CRM.png',
		      title: 'CRM（SHOPCAT）',
		      des: 'Shopcat是一款全渠道的客户关系管理平台。可帮助品牌完成多渠道会员数据整合，并且支持会员相关的营销沟通、活动设定、报表分析。目前可完成天猫、京东、微信、官网及线下渠道的会员整合。',
		      href:'https://sc.baozun.com/'
		    },{
	      img: './assets/管理平台.png',
	      title: '平台管理',
	      des: '通用服务管理平台，为接入方提供大量安全、稳定、高效的开箱即用的工具，为接入方快速拓展业务提供便利。',
	      href:'https://pc.baozun.com/'
	    },{
	      img: './assets/管理平台.png',
	      title: '平台管理 - 新版',
	      des: '新版的平台管理，在原有平台基础上提供了更多的开箱即用的工具，如：业务链路监控。',
	      href:'http://pc-v3.baozun.com/'
	    }, {
	      img: './assets/搜索服务.png',
	      title: '搜索服务',
	      des: '高性能的全文检索服务，提供同义词、联想词、敏感词等功能，帮助接入方在海量数据中进行快速查询。',
	      href:'http://search.baozun.com'
	    }, {
	      img: './assets/搜索服务.png',
	      title: '搜索服务 - 海外',
	      des: '高性能的全文检索服务，提供同义词、联想词、敏感词等功能，帮助接入方在海量数据中进行快速查询。',
	      href:'http://search-aws.baozun.com'
	    },{
	      img: './assets/message.png',
	      title: '消息平台',
	      des: '一站式的消息发送平台，包含短信、邮件、企业微信的发送方式，帮助接入方快速拥有全平台消息通知能力。',
	      href:'http://messenger.baozun.com/#/login'
	    }, {
	      img: './assets/Skywalking.png',
	      title: 'Skywalking',
	      des: '分布式应用的性能监控工具，提供大量图表帮助工程师快速发现应用的性能瓶颈。',
	      href:'http://skywalking-ui-prod.baozun.com/'
	    },{
	      img: './assets/apollo.png',
	      title: 'Apollo',
	      des: '集中化配置管理中心，能够集中化管理应用不同环境、不同集群的配置，配置修改后能够实时推送到应用端，并且具备规范的权限、流程治理等特性。',
	      href:'http://apollo.baozunops.com'
	    }
    ]
  }
}