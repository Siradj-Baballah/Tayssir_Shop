import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { IBreadcrumbItem } from '@src/model';

interface ICustomBreadcrumbProps {
  items?: IBreadcrumbItem[];
}

export const CustomBreadcrumb = ({ items = [] }: ICustomBreadcrumbProps) => {
  return (
    <>
      {items.length > 0 && (
        <Breadcrumb
          dir='rtl'
          spacing="8px"
          separator={<ChevronLeftIcon color="gray.500" />}
          w={{ base: '90%', lg: '85%' }}
          py="2rem"
          px="1rem"
          
          mx="auto"
          fontSize={{ base: 'sm', md: 'md' }}
        >
          {items.map((item, index) =>
            index !== items.length - 1 ? (
              <BreadcrumbItem key={index}>
                <BreadcrumbLink href={item.link}>{item.name}</BreadcrumbLink>
              </BreadcrumbItem>
            ) : (
              <BreadcrumbItem key={index}>
                <Text color="gray.500">{item.name}</Text>
              </BreadcrumbItem>
            )
          )}
        </Breadcrumb>
      )}
    </>
  );
};
