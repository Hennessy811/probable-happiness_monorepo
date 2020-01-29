import React, {FC, useState} from 'react'
import styles from './TodoForm.module.scss'
import Title from "antd/lib/typography/Title";
import ContentCard from "../../../../shared/components/ContentCard";
import Text from "antd/lib/typography/Text";
import {Checkbox, Input, Select} from "antd";
import Button from "../../../../shared/components/Button";
import {useSelector} from "react-redux";
import {IStore} from "../../../../store";
import {IOption, IToDoObject} from "../../Todos";

interface ITodoForm {
    selectSourceOptions: IOption[];
    selectTypeOptions: IOption[];
    selectEstimatesOptions: IOption[];
    onConfirm: (res: IToDoObject) => void;
}

const TodoForm: FC<ITodoForm> = ({selectEstimatesOptions, selectSourceOptions, selectTypeOptions, onConfirm}) => {

    const {Option} = Select;
    const {isLoading} = useSelector((state: IStore) => state.todos);

    const [todoType, setTodoType] = useState('easy');
    const [todoSource, setTodoSource] = useState('github');
    const [todoEstimates, setTodoEstimates] = useState('today');
    const [todoValue, setTodoValue] = useState('Lorem...');

    const selectBeforeType = (
        <Select defaultValue={todoType} style={{width: 90}} onChange={setTodoType}>
            {selectTypeOptions
                .map(option => <Option key={option.value} value={option.value}>{option.title}</Option>)}
        </Select>
    );

    const selectSource = (
        <Select defaultValue={todoSource} style={{width: 250}} onChange={setTodoSource}>
            {selectSourceOptions
                .map(option => <Option key={option.value} value={option.value}>{option.title}</Option>)}
        </Select>
    );

    const selectDuration = (
        <Select defaultValue={todoEstimates} style={{width: 250}} onChange={setTodoEstimates}>
            {selectEstimatesOptions
                .map(option => <Option key={option.value} value={option.value}>{option.title}</Option>)}
        </Select>
    );

    const handleInputChange = (e: any) => {
        setTodoValue(e.target.value);
    }

return (
    <ContentCard>
        <Title level={3}>Добавить ебаную задачу</Title>

        <div className={styles.FormRow}>
            <div className={styles.FormRowItem}>
                <Text className={styles.FormRowItemText}>Текст ебаного задания</Text>
                <Input
                    addonBefore={selectBeforeType}
                    defaultValue={todoValue}
                    onChange={handleInputChange}
                    value={todoValue}
                />
            </div>
            <div className={styles.FormRowItem}>
                <Text className={styles.FormRowItemText}>Где даелаем?</Text>
                {selectSource}
            </div>
            <div className={styles.FormRowItem}>
                <Text className={styles.FormRowItemText}>Когда сделаем?</Text>
                {selectDuration}
            </div>
        </div>

        <div className={styles.ConfirmRow}>
            <div>
                <Checkbox>Бесполезный чекбокс</Checkbox>
                <br/>
                <Text>Какой-то левый текст</Text>
            </div>

            <Button
                className={styles.ConfirmButton}
                type={isLoading ? 'dashed' : 'primary'}
                onClick={() => onConfirm({
                    type: todoType,
                    src: todoSource,
                    value: todoValue,
                    est: todoEstimates
                })}
            >
                Создать
            </Button>
        </div>
        <br/>

    </ContentCard>
)
};

export default TodoForm