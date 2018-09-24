import {Column} from '../../../ng-crud-table';

export function getColumnsPlayers(): Column[] {
  const columnsPlayers: Column[] = [
    {
      title: 'Id',
      name: '_id',
      sortable: true,
      filter: true,
      frozen: false,
      width: 100,
      formHidden: true,
      isPrimaryKey: true,
    },
    {
      title: 'uuid',
      name: 'uuid',
      sortable: true,
      filter: true,
      frozen: true,
      width: 200,
      editable: true,
    },
    {
      title: 'fecha_registro',
      name: 'fecha_registro',
      sortable: true,
      filter: true,
      type: 'datetime-local',
      editable: false,
    },
    {title: 'tipo_documento', name: 'tipo_documento', editable: false},
    {title: 'numero_documento', name: 'numero_documento', editable: false},
    {title: 'nombre', name: 'nombre', editable: false},
    {title: 'primer_apellido', name: 'primer_apellido', editable: false},
    {title: 'segundo_apellido', name: 'segundo_apellido', editable: false},
    {title: 'fecha_nacimiento', name: 'fecha_nacimiento', editable: false},
    {title: 'id_correlacion', name: 'id_correlacion', editable: false},
    {title: 'nombre_servicio', name: 'nombre_servicio', editable: false},
    {title: 'tipo_solicitud', name: 'tipo_solicitud', editable: false},
    {title: 'fecha_insert', name: 'fecha_insert', editable: false},
    {title: 'nombre_operacion', name: 'nombre_operacion', editable: false},
    {title: 'per_nodo', name: 'per_nodo', editable: false},
    {title: 'per_codigo', name: 'per_codigo', editable: false},
    {title: 'ip_consumidor', name: 'ip_consumidor', editable: false},
    {title: 'funcionario', name: 'funcionario', editable: false},
    {title: 'punto_control', name: 'punto_control', editable: false},
    {title: 'sistema_origen', name: 'sistema_origen', editable: false}
  ];
  return columnsPlayers;
}