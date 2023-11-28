import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Table, Button } from 'antd';
import { getAllCategories } from '../services/categories_request'
import { Link } from 'react-router-dom';
const Categories = ({setCurrentCategory}) => {
  const navigateTo = useNavigate();
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function loadCategories() {
      const data = await getAllCategories();
      setCategories(data);
    }
    loadCategories();



  }, [])



  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'name',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Actions',
      dataIndex: 'actionButton'
    }
  ];

  const dataSource = [...categories].map(category => {
    return {
      key: category.id,
      id: category.id,
      name: category.name,
      actionButton: <Button onClick={()=>{setCurrentCategory(category);navigateTo("/admin/categories/details")}} type="primary">
       Info
      </Button>
    }
  });

  return (
    <>
      <Button style={{ marginBlock: '10px' }} type='dashed'>
        <Link to={"/admin/categories/addCategory"}>Add category</Link>
      </Button>
      <Table style={{ marginBlock: '10px' }} dataSource={dataSource} columns={columns} />
    </>

  )
}

export default Categories