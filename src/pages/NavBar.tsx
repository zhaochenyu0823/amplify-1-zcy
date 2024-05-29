
import Inform from './Inform';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Breadcrumbs, Card, Grid } from '@aws-amplify/ui-react';
import AddInfo from './AddInfo';
import InfoList from './InfoList';
import TestUpdatezcy from './TestUpdatezcy';

const NavBar = () => {
  return (
    
    <Grid
      columnGap="0.5rem"
      rowGap="0.5rem"
      templateColumns="1fr 1fr 1fr"
      templateRows="1fr 3fr 1fr"

      style={{
        width: '100vw', 
        height: '900px',
        overflow: 'hidden' 
        
      }}
    >
      <Card
        columnStart="1"
        columnEnd="-1"
      >
        <Breadcrumbs.Container>
          <Breadcrumbs.Item>
            <Breadcrumbs.Link href='/testupdatezcy' >
              测试Express
            </Breadcrumbs.Link>
            <Breadcrumbs.Separator />
          </Breadcrumbs.Item>
          <Breadcrumbs.Item>
            <Breadcrumbs.Link href='/infoList' >
              Info列表
            </Breadcrumbs.Link>
            <Breadcrumbs.Separator />
          </Breadcrumbs.Item>
          <Breadcrumbs.Item>
            <Breadcrumbs.Link href='/addInfo' >
              添加Info
            </Breadcrumbs.Link>
            <Breadcrumbs.Separator />
          </Breadcrumbs.Item>
          <Breadcrumbs.Item>
            <Breadcrumbs.Link href='/inform'  >
              お知らせ
            </Breadcrumbs.Link>
            <Breadcrumbs.Separator />
          </Breadcrumbs.Item>
        </Breadcrumbs.Container>
      </Card>


      <Card
        columnStart="1"
        columnEnd="-1"
      >
        <Router>
          <Routes>
            <Route path="/inform" element={<Inform />} />
            <Route path="/testupdatezcy" element={<TestUpdatezcy />} />
            <Route path="/addInfo" element={<AddInfo />} />
            <Route path="/infoList" element={<InfoList />} />
          </Routes>
        </Router>
      </Card>

      <Card
        columnStart="1"
        columnEnd="-1"
      >
        Footer
      </Card>
    </Grid>


  );
}
export default NavBar;
