function maskCpf( value: string) {
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4");
  return value;
}

function maskCnpj( value: string) {
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})?(\d{3})?(\d{3})?(\d{4})?(\d{2})/, "$1.$2.$3/$4-$5");
  return value;
}

function maskphone( value: string) {
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{2})(\d)/g, "($1)$2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  return value;
}

export { maskCpf,maskCnpj,maskphone }