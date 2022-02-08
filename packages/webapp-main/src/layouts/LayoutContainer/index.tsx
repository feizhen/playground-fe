import { IconBell, IconHelpCircle, IconHistogram, IconHome, IconLive, IconSemiLogo, IconSetting } from '@douyinfe/semi-icons';
import { Avatar, Breadcrumb, Button, Layout, Nav, Skeleton } from '@douyinfe/semi-ui';
import './style.less';

const { Header, Content, Sider } = Layout;

const LayoutContainer: React.FC = ({ children }) => {
  return (
    <Layout style={{ border: '1px solid var(--semi-color-border)' }} className="layout-container">
      <Header style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
        <Nav mode="horizontal" defaultSelectedKeys={['Home']}>
          <Nav.Header>
            <IconSemiLogo style={{ fontSize: 36 }} />
          </Nav.Header>
          <Nav.Item itemKey="Home" text="首页" icon={<IconHome size="large" />} />
          <Nav.Item itemKey="Live" text="直播" icon={<IconLive size="large" />} />
          <Nav.Item itemKey="Setting" text="设置" icon={<IconSetting size="large" />} />
          <Nav.Footer>
            <Button
              theme="borderless"
              icon={<IconBell size="large" />}
              style={{
                color: 'var(--semi-color-text-2)',
                marginRight: '12px',
              }}
            />
            <Button
              theme="borderless"
              icon={<IconHelpCircle size="large" />}
              style={{
                color: 'var(--semi-color-text-2)',
                marginRight: '12px',
              }}
            />
            <Avatar color="orange" size="small">
              YJ
            </Avatar>
          </Nav.Footer>
        </Nav>
      </Header>

      <Layout>
        <Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
          <Nav
            style={{ maxWidth: 220, height: '100%' }}
            defaultSelectedKeys={['Home']}
            items={[
              { itemKey: 'Home', text: '首页', icon: <IconHome size="large" /> },
              { itemKey: 'Histogram', text: '基础数据', icon: <IconHistogram size="large" /> },
              { itemKey: 'Live', text: '测试功能', icon: <IconLive size="large" /> },
              { itemKey: 'Setting', text: '设置', icon: <IconSetting size="large" /> },
            ]}
            footer={{
              collapseButton: true,
            }}
          />
        </Sider>

        <Content
          style={{
            padding: '24px',
            backgroundColor: 'var(--semi-color-bg-0)',
          }}
        >
          <Breadcrumb
            style={{
              marginBottom: '24px',
            }}
            routes={['首页', '当这个页面标题很长时需要省略', '上一页', '详情页']}
          />
          <div>
            {children}
          </div>
        </Content>
      </Layout>

    </Layout>
  )
}

export default LayoutContainer;